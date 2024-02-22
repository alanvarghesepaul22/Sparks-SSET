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

const AddProjectsForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [owner, setOwner] = useState("");
  const [dept, setDept] = useState("");
  const [sem, setSem] = useState("");
  const [url, setUrl] = useState("");
  const [srcCode, setSrcCode] = useState("");

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

      const res = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc,
          owner,
          dept,
          sem,
          url,
          srcCode,
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
      {/* <div Style={`background-color:${uniqueColor}`}>HSL Color</div> */}
      <div className="FormInnerDiv">
        <form onSubmit={handleSubmit} className="FormStyle">
          <div>
            <Label htmlFor="title">Title of the project</Label>
            <Input
              required
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="title"
              placeholder="Enter Title"
              className="inputFields"
            />
          </div>

          <div>
            <Label htmlFor="desc">Description of the project</Label>
            <Input
              required
              onChange={(e) => setDesc(e.target.value)}
              type="text"
              id="desc"
              placeholder="Enter Description"
              className="inputFields"
            />
          </div>

          <div>
            <Label htmlFor="owner">Name of Owner</Label>
            <Input
              required
              onChange={(e) => setOwner(e.target.value)}
              type="text"
              id="owner"
              placeholder="Enter owner's name"
              className="inputFields"
            />
          </div>

          <div className="inputsDiv">
            <div className="w-full">
              <Label htmlFor="dept">Department</Label>
              <Select
                required
                onValueChange={(value) => setDept(value)}
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
                onValueChange={(value) => setSem(value)}
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
              onChange={(e) => setSrcCode(e.target.value)}
              type="text"
              id="srcCode"
              placeholder="Paste Source code link"
              className="inputFields"
            />
          </div>

          <div>
            <Label htmlFor="url">Website URL/Link</Label>
            <Input
              required
              onChange={(e) => setUrl(e.target.value)}
              type="text"
              id="url"
              placeholder="Paste URL here"
              className="inputFields"
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="w-2/6">
              Add Project
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjectsForm;
