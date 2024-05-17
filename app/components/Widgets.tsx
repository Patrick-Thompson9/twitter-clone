import clsx from "clsx";
import { FaHeart, FaPaperPlane } from "react-icons/fa6";
import { SlSpeech } from "react-icons/sl";

interface Props {
  offCard?: boolean;
}

function Widgets({ offCard = false }: Props) {
  const widgets = [
    { name: "heart", icon: <FaHeart />, color: "hover:text-red-400" },
    { name: "comment", icon: <SlSpeech />, color: "hover:text-sky-200" },
    { name: "share", icon: <FaPaperPlane />, color: "hover:text-emerald-200" },
  ];

  if (offCard) {
    return (
      <div className="flex justify-between card-size px-4 py-2 items-center">
        {widgets.map((widget, index) => (
          <div
            className={clsx(
              "flex items-center justify-start gap-2",
              widget.color
            )}
          >
            {widget.icon}
            <span>{`${widget.name}s`}: 0</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex gap-3 mt-2 justify-start items-center">
      {widgets.map((widget, index) => (
        <button
          key={index}
          className={clsx("text-xl hover:cursor-pointer", widget.color)}
          aria-description={widget.name}
        >
          {widget.icon}
        </button>
      ))}
    </div>
  );
}

export default Widgets;
