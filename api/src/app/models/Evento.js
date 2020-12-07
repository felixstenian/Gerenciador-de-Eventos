import mongoose from "mongoose";

const EventoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    data: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
  {
    timestamps: true,
  }
);


export default mongoose.model("Evento", EventoSchema);
