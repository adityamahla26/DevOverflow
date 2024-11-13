import Link from "next/link";

import { auth, signOut } from "@/auth";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const questions = [
  {
    _id: "1",
    title: "How to make a custom hook in React?",
    description: "Learn React",
    tag: [{ _id: "1", name: "React" }],
    author: { _id: "1", name: "A" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to use React Query?",
    description: "Learn React",
    tag: [{ _id: "2", name: "React Query" }],
    author: { _id: "2", name: "B" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "3",
    title: "How to use Redux?",
    description: "Learn React",
    tag: [{ _id: "3", name: "Redux" }],
    author: { _id: "3", name: "B" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "4",
    title: "How to use React Router?",
    description: "Learn React",
    tag: [{ _id: "4", name: "React Rooter" }],
    author: { _id: "4", name: "B" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "5",
    title: "How to use React Context?",
    description: "Learn React",
    tag: [{ _id: "5", name: "React Context" }],
    author: { _id: "5", name: "B" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const session = await auth();
  console.log(session);

  const { query = "" } = await searchParams;
  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search Questions..."
          otherClasses="flex-1"
        />
      </section>
      HomeFilter
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <h1 key={question._id}>{question.title}</h1>
        ))}
      </div>
    </>
  );
};

export default Home;

/* { <div className="px-10 pt-[100px] ">DevOverflow</div>
      <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Sign out</Button>
      </form> } */
