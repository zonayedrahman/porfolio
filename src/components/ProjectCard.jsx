import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

const ProjectCard = ({ project }) => {
    return (
        <Card className="h-[350px] w-[350px] bg-slate-800 text-white flex flex-col z-10">
            <CardHeader className=" h-[30%]">
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className=" h-[50%]">
                <p>{project.content}</p>
            </CardContent>
            <CardFooter className=" h-[20%] flex flex-col w-full pt-4 items-end">
                <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button>View on Github</Button>
                </a>
                {/* <p>View on GitHub:</p>
                <p>{project.githubLink}</p> */}
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;
