import { savePageSettings } from "@/actions/page/page-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import uploadFile from "@/lib/uploadFile";
import { S3 } from "aws-sdk";
import { Loader2Icon, SplineIcon } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const UploadCoverImage = ({ uri, setBgImage }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadLink, setUploadLink] = useState(null);
  const [permanentLink, setPermanentLink] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [allFiles, setAllFiles] = useState([]);
  const [buckets, setBuckets] = useState([]);

  const ACCESSKEY = process.env.NEXT_PUBLIC_LIARA_ACCESS_KEY;
  const SECRETKEY = process.env.NEXT_PUBLIC_LIARA_SECRET_KEY;
  const ENDPOINT = process.env.NEXT_PUBLIC_LIARA_ENDPOINT;
  const BUCKET = process.env.NEXT_PUBLIC_LIARA_BUCKET_NAME;

  const fetchBuckets = async () => {
    const s3 = new S3({
      accessKeyId: ACCESSKEY,
      secretAccessKey: SECRETKEY,
      endpoint: ENDPOINT,
    });
    try {
      const response = await s3.listBuckets().promise();
      setBuckets(response.Buckets);
    } catch (error) {
      console.error("Error fetching buckets: ", error);
    }
  };

  const fetchAllFiles = async () => {
    const s3 = new S3({
      accessKeyId: ACCESSKEY,
      secretAccessKey: SECRETKEY,
      endpoint: ENDPOINT,
    });

    try {
      const response = await s3.listObjectsV2({ Bucket: BUCKET }).promise();
      setAllFiles(response.Contents);
    } catch (error) {
      console.error("Error fetching files: ", error);
    }
  };

  useEffect(() => {
    fetchBuckets();
    fetchAllFiles();
  }, [uploadLink]);

  const handleFileChange = (event) => {
    setFile(event.target.files?.[0]);
    setError(null);
    setUploadLink(null);
  };

  const handleUploadButton = async () => {
    setIsUploading(true);
    await uploadFile(file).then(async (res) => {
      const formValues = { bgImage: res };

      // Add image url to database
      await savePageSettings(uri, formValues).then((data) => {
        if (data.success) {
          toast({
            description: "تصویر با موفقیت اننتخاب شد",
          });
          setBgImage(formValues.bgImage);
        }
        if (data.error) {
          toast({
            description: "خظایی رخ داد. لطفا دوباره امتحان کنید",
          });
        }
      });
      setIsUploading(false);
    });
  };

  const handleDeleteFile = async (file) => {
    try {
      const s3 = new S3({
        accessKeyId: ACCESSKEY,
        secretAccessKey: SECRETKEY,
        endpoint: ENDPOINT,
      });

      await s3.deleteObject({ Bucket: BUCKET, Key: file.Key }).promise();

      console.log("File deleted successfully");
    } catch (error) {
      console.error("Error deleting file: ", error);
    }
  };

  return (
    <div className="upload-container mt-2 bg-background p-2 shadow">
      <div className="file-upload flex items-center justify-center gap-2">
        <Button
          onClick={handleUploadButton}
          disabled={!file || isUploading}
          className="upload-button"
        >
          {!isUploading ? "بارگزاری" : <Loader2Icon className="animate-spin" />}
        </Button>
        <label className="cursor-pointer truncate hover:text-primary">
          {file?.name ? file.name : "انتخاب عکس"}
          <Input
            type="file"
            onChange={handleFileChange}
            className="file-input hidden"
          />
        </label>
      </div>
    </div>
  );
};

export default UploadCoverImage;
