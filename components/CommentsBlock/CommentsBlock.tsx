import { Button, Card, Label, Textarea } from "flowbite-react";
import { useSearchContext } from "../../context/search";
import supabase from "../../components/supabaseClient";
import { useUser, useSupabaseClient, Session } from '@supabase/auth-helpers-react'
import { useRouter } from "next/navigation";

export default function CommentsBlock({data}: any) {

  const {searchResults, setSearchResults, bank, setBank, comments, setComments, toggle, setToggle, mapCode, setMapCode, showMap, setShowMap, tailwindMobileMap, setTailwindMobileMap, tailwindMobileList, setTailwindMobileList, commentInput, setCommentInput, usernameGlobal, setUsernameGlobal}: any = useSearchContext();
  const router = useRouter();
  const user = useUser()
  let userId = user?.id

  async function insertComment() {
    console.log()
    let slugData = bank.foodbank.slug;
    const { data, error } = await supabase
      .from("comments")
      .insert([{ uuid_author: userId,  FK_username: usernameGlobal, slug: slugData, comment: commentInput}])
      fetchComments()
      setCommentInput("")
  }

  async function fetchComments() {
    let slugData = bank.foodbank.slug;
    const { data, error } = await supabase
      .from("comments")
      .select()
      .like("slug", slugData)
      .order('id', { ascending: false })
    console.log("supabase url", supabase);
    setComments(data);
  }


  function renderCommentForm() {
    console.log(`usernameGlobal: `, usernameGlobal)
    if (usernameGlobal) {
      return <div id='auth-user-post-comment'>
        <div id="textarea">
          <div className="mb-2 block p-2">
            <Label
              htmlFor="comment"
              value="Your comment"
            />
          </div>

          <Textarea
            id="comment"
            placeholder="Leave a comment..."
            required={true}
            rows={4}
            onChange={(e) => setCommentInput(e.target.value)}
            value={commentInput}
          />
        </div>
        <Button type="submit" onClick={() => insertComment()} className='m-2'>
          Submit
        </Button>
      </div>
    }
  }

  return (
    <>
      {renderCommentForm()}
      <h1 className=" text-gray-900 text-xl p-2 dark:text-gray-300">
        Comments
      </h1>
      <div className="text-gray-900 dark:text-gray-300 space-y-1">
        {data.map((element: any, index: any) => {
          return (
            <Card key={index} className="">
              <h5 className="text-l font-bold tracking-tight text-gray-900 dark:text-white">
                {element.name}
              </h5>
              <p className="font-light text-gray-900 dark:text-gray-300">
                {element.author}
              </p>
              <p className="font-light text-gray-900 dark:text-gray-300">
                {element.comment}
              </p>
            </Card>
          );
        })}
      </div>
    </>
  );
}