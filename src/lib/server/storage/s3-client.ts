import { S3Client } from '@aws-sdk/client-s3';
import {
	S3_ENDPOINT,
	S3_REGION,
	S3_ACCESS_KEY_ID,
	S3_SECRET_ACCESS_KEY,
	S3_USE_SSL
} from '$env/static/private';

export const s3Client = new S3Client({
	endpoint: `https://${S3_ENDPOINT}`,
	region: S3_REGION,
	credentials: {
		accessKeyId: S3_ACCESS_KEY_ID,
		secretAccessKey: S3_SECRET_ACCESS_KEY
	},
	forcePathStyle: true, // Required for S3-compatible services
	tls: S3_USE_SSL === 'true'
});