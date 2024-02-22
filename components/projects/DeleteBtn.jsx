"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const DeleteBtn = ({ id }) => {
  const router = useRouter();
  const { toast } = useToast();
  async function HandleDelete() {
    toast({
      title: "Deleting...",
    });
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await fetch(`/api/projects/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        toast({
          variant: "success",
          title: "Password deleted!.",
          description: "You've successfully deleted password.",
        });

        router.refresh();
      })
      .catch((error) => {
        toast({
          variant: "destructive",
          title: "Something went wrong!",
          description: error,
        });
      });
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="h-5 bg-red-400 hover:bg-red-600">Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this
            project and its details.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              HandleDelete()
            }}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteBtn;
