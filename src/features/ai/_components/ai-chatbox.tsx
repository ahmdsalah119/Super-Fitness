import OpenIcon from "@/components/shared/open-icon";
import AiChat from "./ai-chat";
import chatBg from "@/assets/ai-bg.jpg";
import { AppInput } from "@/components/shared/app-input";
import { PencilLine, SquarePen } from "lucide-react";
import { Button } from "@/components/ui/button";
import AiSidebar from "./ai-sidebar";
import useAiSidebar from "../_hooks/use-ai-sidebar";
import { useForm } from "react-hook-form";
import { useChat } from "../_hooks/use-chat";
import { useIntl } from "react-intl";

type FormData = {
  message: string;
};

export default function AiChatBox() {
  // Hooks
  const { toggle, isOpen } = useAiSidebar();
  const { sendMessage, createNewChat } = useChat();
  const { register, handleSubmit, reset } = useForm<FormData>();

  // Translation
  const { formatMessage } = useIntl();

  const onSubmit = async (data: FormData) => {
    console.log(data);
    sendMessage(data.message);
    reset();
  };

  return (
    <div className="h-full relative">
      {/* Black Layer behind the side bar */}
      {isOpen && (
        <div
          className="absolute h-full inset-0 bg-black/50 z-40 "
          onClick={toggle}
        ></div>
      )}

      {/* The Side Bar */}
      <AiSidebar />

      {/* Content */}
      <div className=" relative bg-transparent z-0  top-0 left-0 w-full h-full px-4">
        <div className=" relative z-20 h-full">
          <div className=" flex items-center justify-between">
            <h1 className=" font-bold text-2xl text-[#F3F3F4]">
              {formatMessage({ id: "smart-coach" })}
            </h1>{" "}
            <SquarePen
              className="text-[#FF4100] cursor-pointer"
              onClick={createNewChat}
            />
            <OpenIcon onClick={toggle} />
          </div>

          {/* AI CHAT!! */}
          <AiChat />
        </div>
      </div>

      <form
        className="mx-8 z-40 flex gap-2 -translate-y-16 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <AppInput
          className="h-9 "
          iconClass="text-[#FF4100]"
          icon={PencilLine}
          placeholder="Send"
          {...register("message")}
        />
        <Button className=" bg-[#FF4100] h-9">
          {formatMessage({ id: "send" })}
        </Button>{" "}
      </form>

      <div className="-z-10 absolute top-0  w-full h-full">
        <img src={chatBg} className="  w-full h-full -z-10" alt="" />
        <div className="absolute h-full inset-0 bg-black/10 z-0 backdrop-blur-md"></div>
      </div>
    </div>
  );
}
