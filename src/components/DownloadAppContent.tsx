import { Button } from "./Button";
interface DownloadApp {
  heading: string;
  article: string;
  style?: string;
  headStyle?: string;
  button?: string;
  width?: string;
}
export function DownloadAppContent({
  heading,
  article,
  button,
  style,
  width,
  headStyle,
}: DownloadApp) {
  return (
    <div
      className={`flex flex-col items-start gap-[32px] sm:gap-10 text-blue-800 w-full ${style}`}
    >
      <h3
        className={`font-semibold sm:text-5xl text-[32px] font-nunito leading-[42.6px] sm:leading-[62px] ${headStyle}`}
      >
        {heading}
      </h3>
      <p
        className={`sm:text-xl text-lg font-normal xl:w-[394px] w-full  sm:leading-[30px] ${width}`}
      >
        {article}
      </p>
      <Button to="/DownloadApp" style={`${button}`}>
        <span>Download App</span>
      </Button>
    </div>
  );
}
