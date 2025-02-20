require('dotenv').config();
const multer = require('multer');
const multerS3 = require('multer-s3');
const { S3Client } = require('@aws-sdk/client-s3');

const region = process.env.AWS_REGION;
const endpoint = process.env.BUCKET_ENDPOINT;
const myBucket = process.env.BUCKET_NAME;

const { success, fail } = require('../modules/util');
const statusCode = require('../modules/statusCode');

const PostService = require('../service/blog-service');
const client = new S3Client({
    region: region
});

const upload = multer({
    storage: multerS3({
        s3: client,
        bucket: myBucket,
        key: function (req, file, cb) {
            const fileName = Date.now() + '-' + file.originalname;
            cb(null, fileName);
        }
    })
})

// Upload Post 
exports.postBlog = async (req, res) => {

    upload.fields([{ name: 'md'}, { name: 'image'}]) (req, res, async function(err) {
        if (err) { 
            console.log(err);
            return res.status(statusCode.INTERNAL_SERVER_ERROR).send(fail(statusCode.INTERNAL_SERVER_ERROR, "error while uploading files"));    
        }

        const mdFile = req.files['md'][0];
        const imageFile = req.files['image'][0];
        const { header, quote, author, category } = req.body;
    
        try {
            const postBody = {
                header,
                quote,
                author,
                category,
                md_file: mdFile.location,
                image_url: imageFile.location
            }
            const newPostId = await PostService.postBlog(postBody);
            return res
                .status(statusCode.OK)
                .send(success(statusCode.OK, "Blog posted successfully", newPostId));
    
        } catch (err) {
            console.log(err);
            return res
                .status(statusCode.INTERNAL_SERVER_ERROR)
                .send(fail(statusCode.INTERNAL_SERVER_ERROR, "error while uploading files"));
        }
    })

   
}