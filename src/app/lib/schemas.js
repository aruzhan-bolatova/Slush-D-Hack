import mongoose from "mongoose";

// Schema definitions
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  diagnosis: { type: String },
  preferred_words: [{ type: String }],
  past_interactions: [
    {
      sentence: [{ type: String }],
      timestamp: { type: Date, default: Date.now }
    }
  ]
}, { collection: 'Users' });

const cardSchema = new mongoose.Schema({
  word: { type: String, required: true, unique: true },
  image: { type: String },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  follow_up_words: [{ type: String }]
});

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  cards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Card" }]
});

const cacheSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  word: { type: String, required: true },
  recommendations: [{ type: String }],
  createdAt: { type: Date, default: Date.now, expires: 3600 }
});

// Check if models exist before creating them
const User = mongoose.models.User || mongoose.model("User", userSchema);
const Card = mongoose.models.Card || mongoose.model("Card", cardSchema);
const Category = mongoose.models.Category || mongoose.model("Category", categorySchema);
const Cache = mongoose.models.Cache || mongoose.model("Cache", cacheSchema);

export { User, Card, Category, Cache };
