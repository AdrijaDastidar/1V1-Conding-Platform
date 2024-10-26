import { useState, useEffect } from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Training() {
    const [questions, setQuestions] = useState([
        {
            id: 1,
            title: "Reverse a Linked List",
            difficulty: "Medium",
            topic: "Linked List",
            isFavorite: false,
        },
        {
            id: 2,
            title: "Valid Parentheses",
            difficulty: "Easy",
            topic: "Stack",
            isFavorite: false,
        },
        {
            id: 3,
            title: "Merge Two Sorted Lists",
            difficulty: "Easy",
            topic: "Linked List",
            isFavorite: false,
        },
        {
            id: 4,
            title: "Longest Palindromic Substring",
            difficulty: "Medium",
            topic: "String",
            isFavorite: false,
        },
        {
            id: 5,
            title: "Climbing Stairs",
            difficulty: "Easy",
            topic: "Dynamic Programming",
            isFavorite: false,
        },
        {
            id: 6,
            title: "Longest Common Prefix",
            difficulty: "Easy",
            topic: "String",
            isFavorite: false,
        },
        {
            id: 7,
            title: "Trapping Rain Water",
            difficulty: "Hard",
            topic: "Array",
            isFavorite: false,
        },
        {
            id: 8,
            title: "N-Queens",
            difficulty: "Hard",
            topic: "Backtracking",
            isFavorite: false,
        },
        {
            id: 9,
            title: "Max Flow in Network",
            difficulty: "Hard",
            topic: "Graph",
            isFavorite: false,
        },
    ]);

    const [filteredQuestions, setFilteredQuestions] = useState(questions);
    const [sortBy, setSortBy] = useState("difficulty");
    const [filterBy, setFilterBy] = useState("all");

    const handleSolve = (id) => {
        setQuestions((prevQuestions) =>
            prevQuestions.map((q) =>
                q.id === id ? { ...q, isFavorite: !q.isFavorite } : q
            )
        );
    };

    const difficultyOrder = {
        "Easy": 1,
        "Medium": 2,
        "Hard": 3,
    };

    useEffect(() => {
        let filtered = [...questions]; // Ensure we're not mutating the original array

        // Filtering based on difficulty
        if (filterBy !== "all") {
            filtered = filtered.filter((q) => q.difficulty === filterBy);
        }

        // Sorting
        if (sortBy === "difficulty") {
            filtered = filtered.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
        } else if (sortBy === "topic") {
            filtered = filtered.sort((a, b) => a.topic.localeCompare(b.topic));
        }

        setFilteredQuestions(filtered);
    }, [questions, sortBy, filterBy]);

    return (
        <div className="flex mx-40 flex-col w-3/4 h-screen bg-background">
            <div className="flex-1 p-6 gap-6">
                <div className="bg-card p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold mb-4">Filters</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="w-full">
                                    <span className="mr-2">Difficulty</span>
                                    <ChevronDownIcon className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start">
                                <DropdownMenuRadioGroup value={filterBy} onValueChange={setFilterBy}>
                                    <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="Easy">Easy</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="Medium">Medium</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="Hard">Hard</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="w-full">
                                    <span className="mr-2">Sort By</span>
                                    <ChevronDownIcon className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start">
                                <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
                                    <DropdownMenuRadioItem value="difficulty">Difficulty</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="topic">Topic</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className="bg-card p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold mb-4">Questions</h2>
                    <div className="grid gap-4">
                        {filteredQuestions.map((question) => (
                            <Card key={question.id} className="bg-background p-2 rounded-lg shadow-md">
                                <div className="flex justify-between items-center">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-medium ${question.difficulty === "Easy"
                                            ? "bg-green-100 text-green-600"
                                            : question.difficulty === "Medium"
                                                ? "bg-yellow-100 text-yellow-600"
                                                : "bg-red-100 text-red-600"
                                            }`}
                                    >
                                        {question.difficulty}
                                    </span>
                                    <Button
                                        variant={question.isFavorite ? "primary" : "outline "}
                                        size="icon"
                                        onClick={() => handleSolve(question.id)}
                                    >
                                        <HeartIcon className={`h-5 w-5 ${question.isFavorite ? "text-red-600" : "text-grey-400"}`} />
                                    </Button>
                                </div>
                                <h3 className="text-lg font-bold">{question.title}</h3>
                                <p className="text-muted-foreground mb-2">{question.topic}</p>
                                <Button className="w-full bg-green-500 hover:bg-green-400">Solve</Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ChevronDownIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    );
}

function HeartIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
    );
}
