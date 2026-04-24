import AppHeading from "@/components/shared/app-heading";
import { useIntl } from "react-intl";

export default function ClassesHeading() {
  // Translation
  const { formatMessage } = useIntl();

  return (
    <>
      <AppHeading
        title={formatMessage({ id: "classes.title" })}
        backgroundText={formatMessage({ id: "classes.background" })}
      />{" "}
      <p className="font-heading mx-auto max-w-[637px] text-4xl font-bold text-white mt-4">
        {formatMessage(
          { id: "classes.description" },
          {
            span: (chunks) => <span className="text-primary">{chunks}</span>,
          },
        )}
      </p>{" "}
    </>
  );
}
