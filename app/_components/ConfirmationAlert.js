import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

function ConfirmationAlert({
  title = "",
  description = "",
  onClick,
  children,
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogPortal>
        {" "}
        <AlertDialogContent className=" bg-accent-400 border-accent-900 py-4 px-4 max-w-9/10 sm:max-w-96 rounded-md">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-accent-950">
              {title}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-accent-900">
              {description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="text-accent-950 cursor-pointer">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={onClick}
              className="bg-accent-900 cursor-pointer hover:bg-accent-950 transition-all duration-300"
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  );
}

export default ConfirmationAlert;
