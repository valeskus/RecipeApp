import { Injectable } from '@nestjs/common';
import { getDownloadURL, getStorage } from 'firebase-admin/storage';

import { UploadedImage } from './dto/uploaded-image.dto';

@Injectable()
export class ImagesService {
  private get bucket() {
    return getStorage().bucket('recipe-app-api-images');
  }

  async upload(uploadedFile: Express.Multer.File): Promise<{ url: string }> {
    const file = this.bucket.file(`${(new Date()).toISOString()}.png`);

    await file.save(uploadedFile.buffer);

    return {
      url: await getDownloadURL(file)
    };
  }

  async get() {
    const [files] = await this.bucket.getFiles();
    const urlItems: Array<UploadedImage> = [];

    for (const file of files) {
      urlItems.push({
        url: await getDownloadURL(file)
      });
    }

    return {
      images: urlItems
    };
  }
}
