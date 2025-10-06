import { Button } from "./ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./ui/empty";

function EmptyMessage({
  iconComponent,
  title = "",
  description = "",
  children,
}) {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia
          variant="icon"
          className="bg-transparent !size-20 [&_svg]:!size-16 text-accent-500"
        >
          {iconComponent}
        </EmptyMedia>
        <EmptyTitle className="text-2xl">{title}</EmptyTitle>
        <EmptyDescription className="text-accent-200">
          {description}
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>{children}</EmptyContent>
    </Empty>
  );
}

export default EmptyMessage;
