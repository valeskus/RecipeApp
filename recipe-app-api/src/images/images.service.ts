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

  async get(): Promise<{ images: Array<UploadedImage> }> {
    const [files] = await this.bucket.getFiles();

    const filesSorted = files.sort((currentFile, nextFile) =>
      currentFile.metadata.timeCreated > nextFile.metadata.timeCreated ? -1 : 1
    );

    return {
      images: await Promise.all(
        filesSorted.map(async (file) => ({ url: await getDownloadURL(file) }))
      )
    };
  }
}
