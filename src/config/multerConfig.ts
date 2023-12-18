import multer from "multer";
import { logger } from "./logger";
import { json } from "sequelize";
import dotenv from "dotenv";

// Load the environment variables from .env file
dotenv.config();
const dirUploadPath: string = process.env.DIR_UPLOAD_PATH!;

const storage = multer.diskStorage({
  // destination: "uploads/",
  destination: function (req, file, cb) {
    cb(null, dirUploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = file.originalname.split(".").pop(); // Get the file extension
    const filename = file.fieldname + "-" + uniqueSuffix + "." + extension; // Include extension in the filename
    const path = dirUploadPath + filename; // Create the full path including the 'uploads/' directory

    logger.info(
      json({
        uniqueSuffix: uniqueSuffix,
        extension: extension,
        filename: filename,
        path: path,
      })
    ); // log

    cb(null, filename);
  },
});

export const upload = multer({ storage });
