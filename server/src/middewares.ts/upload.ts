import { Request } from 'express';
import multer, { StorageEngine } from 'multer';


// Configure Multer storage options
const storage: StorageEngine = multer.diskStorage({
 
  filename: (req:Request, file: Express.Multer.File, cb:any) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Initialize Multer
const upload = multer({ storage });

export default upload;