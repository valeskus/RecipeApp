import {
    Controller,
    Get,
    HttpStatus,
    ParseFilePipeBuilder,
    Post,
    UploadedFile,
    UseGuards,
    UseInterceptors
} from '@nestjs/common';
import {
    ApiOperation,
    ApiOkResponse,
    ApiTags,
} from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

import { AdminApiGuard } from '../guards/admin-api.guard';

import { ImagesService } from './images.service';
import { DimensionsValidator } from './validators/dimensions.validator';
import { UploadedImageDto } from './dto/uploaded-image.dto';
import { ImagesDto } from './dto/images.dto';

@ApiTags('Images')
@Controller('images')
export class ImagesController {
    constructor(
        private readonly imagesService: ImagesService,
    ) { }

    @UseGuards(AdminApiGuard)
    @Get('/')
    @ApiOperation({ summary: 'Get list of images' })
    @ApiOkResponse({
        description: 'Returns the list of images',
        type: ImagesDto
    })
    get() {
        return this.imagesService.get();
    }

    @UseGuards(AdminApiGuard)
    @Post('/upload')
    @ApiOperation({ summary: 'Upload image' })
    @ApiOkResponse({
        description: 'Uploads image to outer storage',
        type: UploadedImageDto
    })
    @UseInterceptors(FileInterceptor('image'))
    upload(
        @UploadedFile(
            new ParseFilePipeBuilder()
                .addFileTypeValidator({
                    fileType: new RegExp(/(png|jpeg|jpg)/),
                })
                .addMaxSizeValidator({
                    maxSize: 1000000
                })
                .addValidator(new DimensionsValidator({
                    minWidth: 500,
                    minHeight: 500,
                    aspectRatio: 1
                }))
                .build({
                    errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
                }),
        ) uploadedFile: Express.Multer.File
    ) {
        return this.imagesService.upload(uploadedFile);
    }
}
