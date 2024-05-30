import clsx from "clsx";
import { useState } from "react";
import { FileDrop } from "react-file-drop";

interface props {
  timeline: string;
}

function Timeline({ timeline }: props) {
  const [isFileNearby, setIsFileNearby] = useState(false);
  const [fileHover, setFileHover] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async (e: React.DragEvent, files: File[]) => {
    e.preventDefault();
    setIsUploading(true);
    const data = new FormData();
    data.append("timeline", files[0]);
    await fetch("/api/upload", {
      method: "POST",
      body: data,
    });
    setIsUploading(false);
  };

  return (
    <div
      className={clsx(
        fileHover
          ? "border-sky-200 border-4"
          : isFileNearby && "border-sky-200/75 border-4"
      )}
    >
      <FileDrop
        onDragOver={() => setFileHover(true)}
        onDragLeave={() => setFileHover(false)}
        onFrameDragEnter={() => setIsFileNearby(true)}
        onFrameDragLeave={() => setIsFileNearby(false)}
        onDrop={() => handleUpload}
      >
        <img
          src={timeline ? timeline : "default-timeline.jpg"}
          className={clsx(
            "w-full h-40 md:h-60",
            fileHover
              ? "filter blur-[0.5px] hue-rotate-15"
              : isFileNearby && "filter blur-[0.5px] hue-rotate-30"
          )}
        />
        <span
          className={clsx(
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sky-200 text-2xl font-medium px-4 py-3 bg-slate-800/85 rounded-lg",
            isFileNearby ? "visible" : "hidden"
          )}
        >
          {fileHover ? "Upload Image" : "Drag and Drop"}
        </span>
      </FileDrop>
    </div>
  );
}

export default Timeline;
