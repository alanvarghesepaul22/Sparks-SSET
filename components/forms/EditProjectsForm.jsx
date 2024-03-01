"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { depts, semesters } from "@/utils/Constants";
import { useState } from "react";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";

const EditProjectsForm = ({ data }) => {
  const { _id: id, title, desc, owner, dept, sem, url } = data;
  const router = useRouter();
  const { toast } = useToast();
  const [newTitle, setNewTitle] = useState(title);
  const [newDesc, setNewDesc] = useState(desc);
  const [newOwner, setNewOwner] = useState(owner);
  const [newDept, setNewDept] = useState(dept);
  const [newSem, setNewSem] = useState(sem);
  const [newUrl, setNewUrl] = useState(url);
  const [newSrcCode, setNewSrcCode] = useState(url);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resProjectExists = await fetch("/api/projects/projectExists", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ title, owner, url }),
      });

      const { projectData } = await resProjectExists.json();

      if (projectData) {
        toast({
          title: "Project already exists!",
          description: "Project with same title and owner name already exists.",
        });
        return;
      }

      const res = await fetch(`/api/projects/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newTitle,
          newDesc,
          newOwner,
          newDept,
          newSem,
          newUrl,
          newSrcCode,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/projects");
        toast({
          variant: "success",
          title: "Form submitted successfully!",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Project submission failed!",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Error during submission!",
      });
    }
  };
  return (
    <div className="FormMainDiv">
      <div className="FormInnerDiv">
        <form onSubmit={handleSubmit} className="FormStyle">
          <div>
            <Label htmlFor="title">Title of the project</Label>
            <Input
              required
              onChange={(e) => setNewTitle(e.target.value)}
              value={newTitle}
              type="text"
              id="title"
              placeholder="Enter Title"
              className="inputFields"
              autoComplete="off"
            />
          </div>

          <div>
            <Label htmlFor="desc">Description of the project</Label>
            <Input
              required
              onChange={(e) => setNewDesc(e.target.value)}
              value={newDesc}
              type="text"
              id="desc"
              placeholder="Enter Description"
              className="inputFields"
              autoComplete="off"
            />
          </div>

          <div>
            <Label htmlFor="owner">Name of Owner</Label>
            <Input
              required
              onChange={(e) => setNewOwner(e.target.value)}
              value={newOwner}
              type="text"
              id="owner"
              placeholder="Enter owner's name"
              className="inputFields"
              autoComplete="off"
            />
          </div>

          <div className="inputsDiv">
            <div className="w-full">
              <Label htmlFor="dept">Department</Label>
              <Select
                required
                onValueChange={(value) => setNewDept(value)}
                value={newDept}
                name="dept"
                id="dept"
                className="inputFields"
              >
                <SelectTrigger className="inputLabel dark:bg-neutral-900">
                  <SelectValue placeholder="Choose department" />
                </SelectTrigger>
                <SelectContent>
                  {depts.map((dept) => (
                    <SelectItem key={dept.id} value={dept.short}>
                      {dept.full}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <Label htmlFor="sem">Semetser</Label>
              <Select
                required
                onValueChange={(value) => setNewSem(value)}
                value={newSem}
                name="sem"
                id="sem"
                className="inputFields"
              >
                <SelectTrigger className="inputLabel dark:bg-neutral-900">
                  <SelectValue placeholder="Choose department" />
                </SelectTrigger>
                <SelectContent>
                  {semesters.map((sem, index) => (
                    <SelectItem key={index} value={sem}>
                      {sem}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="srcCode">Project Source code link (optional)</Label>
            <Input
              onChange={(e) => setNewSrcCode(e.target.value)}
              value={newUrl}
              type="text"
              id="srcCode"
              placeholder="Paste Source code link"
              className="inputFields"
              autoComplete="off"
            />
          </div>

          <div>
            <Label htmlFor="url">Website URL/Link</Label>
            <Input
              required
              onChange={(e) => setNewUrl(e.target.value)}
              value={newUrl}
              type="text"
              id="url"
              placeholder="Paste URL here"
              className="inputFields"
              autoComplete="off"
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="w-2/6">
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProjectsForm;
