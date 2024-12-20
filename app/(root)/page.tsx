import Link from "next/link";

import { auth, signOut } from "@/auth";
import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import handleError from "@/lib/handlers/error";
import {
  NotFoundError,
  RequestError,
  ValidationError,
  ForbiddenError,
} from "@/lib/http-errors";
import dbConnect from "@/lib/mongoose";

const questions = [
  {
    _id: "1",
    title: "How to make a custom hook in React?",
    description: "Learn React",
    tags: [{ _id: "1", name: "React" }],
    author: {
      _id: "1",
      name: "A",
      image:
        "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to use React Query?",
    description: "Learn React",
    tags: [{ _id: "2", name: "React" }],
    author: {
      _id: "2",
      name: "B",
      image:
        "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "3",
    title: "How to use Redux?",
    description: "Learn Redux",
    tags: [{ _id: "3", name: "Redux" }],
    author: {
      _id: "3",
      name: "B",
      image:
        "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "4",
    title: "How to use React Router?",
    description: "Learn React",
    tags: [{ _id: "4", name: "React" }],
    author: {
      _id: "4",
      name: "B",
      image:
        "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "5",
    title: "How to use React Context?",
    description: "Learn React",
    tags: [{ _id: "5", name: "React" }],
    author: {
      _id: "5",
      name: "B",
      image:
        "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "6",
    title: "How to use JavaScript?",
    description: "Learn JavaScript",
    tags: [{ _id: "5", name: "JavaScript" }],
    author: {
      _id: "5",
      name: "B",
      image:
        "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
];

const test = async () => {
  try {
    // await dbConnect();
    // throw new Error("Test Error");
    throw new ValidationError({ element: ["notFound"], email: ["Required"] });
  } catch (error) {
    return handleError(error);
  }
};

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  await test();

  const session = await auth();
  console.log(session);

  const { query = "", filter = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) => {
    const matchedQuery = question.title
      .toLowerCase()
      .includes(query?.toLowerCase());
    const matchedFilter = filter
      ? question.tags[0].name.toLowerCase() === filter.toLowerCase()
      : true;
    return matchedQuery && matchedFilter;
  });

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
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;

// sign-out demo
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

// error handle demo
/* const test = async () => {
  try {
    throw new ValidationError({ element: ["notFound"], email: ["Required"] });
  } catch (error) {
    return handleError(error);
  }
}; */
