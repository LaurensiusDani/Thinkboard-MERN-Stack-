import { getDB } from "../config/db.js";
import crypto from "crypto";

// Helper function to map SQLite rows to frontend-compatible note objects
const mapNote = (row) => {
  if (!row) return null;
  return {
    _id: row.id,
    title: row.title,
    content: row.content,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt
  };
};

export async function getAllNotes(_, res) {
  try {
    const db = getDB();
    const rows = await db.all("SELECT * FROM notes ORDER BY createdAt DESC");
    const notes = rows.map(mapNote);
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getNoteById(req, res) {
  try {
    const db = getDB();
    const row = await db.get("SELECT * FROM notes WHERE id = ?", req.params.id);
    if (!row) return res.status(404).json({ message: "Note not found!" });
    res.json(mapNote(row));
  } catch (error) {
    console.error("Error in getNoteById controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }
    
    const id = crypto.randomUUID();
    const now = new Date().toISOString();
    
    const db = getDB();
    await db.run(
      "INSERT INTO notes (id, title, content, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?)",
      id,
      title,
      content,
      now,
      now
    );
    
    res.status(201).json({
      _id: id,
      title,
      content,
      createdAt: now,
      updatedAt: now
    });
  } catch (error) {
    console.error("Error in createNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const now = new Date().toISOString();
    const db = getDB();
    
    // First, verify note existence
    const row = await db.get("SELECT * FROM notes WHERE id = ?", req.params.id);
    if (!row) return res.status(404).json({ message: "Note not found" });

    // Use current values if title or content are not provided in update request
    const updatedTitle = title !== undefined ? title : row.title;
    const updatedContent = content !== undefined ? content : row.content;

    await db.run(
      "UPDATE notes SET title = ?, content = ?, updatedAt = ? WHERE id = ?",
      updatedTitle,
      updatedContent,
      now,
      req.params.id
    );

    res.status(200).json({
      _id: req.params.id,
      title: updatedTitle,
      content: updatedContent,
      createdAt: row.createdAt,
      updatedAt: now
    });
  } catch (error) {
    console.error("Error in updateNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteNote(req, res) {
  try {
    const db = getDB();
    const row = await db.get("SELECT * FROM notes WHERE id = ?", req.params.id);
    if (!row) return res.status(404).json({ message: "Note not found" });

    await db.run("DELETE FROM notes WHERE id = ?", req.params.id);
    res.status(200).json({ message: "Note deleted successfully!" });
  } catch (error) {
    console.error("Error in deleteNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}