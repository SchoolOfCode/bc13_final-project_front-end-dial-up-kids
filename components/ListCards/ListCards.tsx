import { v4 as uuidv4 } from "uuid";
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";
import { useSearchContext } from "../../context/search";
import { useRouter } from "next/navigation";
import supabase from "../../components/supabaseClient";

let index = 0;
let element = {address:"bums", name:""};

export default function ListCards({index}: any , {element}:any) {
  const [
    search,
    setSearch,
    text,
    setText,
    searchResults,
    setSearchResults,
    location,
    setLocation,
    bank,
    setBank,
    comments,
    setComments,
  ]: any = useSearchContext();
  const router = useRouter();

  async function fetchComments(index: number) {
    let slugData = searchResults[index].foodbank.slug;
    const { data, error } = await supabase
      .from("comments")
      .select()
      .like("slug", slugData);
	  console.log("supabase url", supabase)
    setComments(data);
  }

  function handleCard(index: number) {
    setLocation(searchResults[index].lat_lng);
    console.log(`handleCard: `, location);
  }

  function moreInfo(index: number) {
    setBank(searchResults[index]);
    setLocation(searchResults[index].lat_lng);
    router.push("/moreInfoBank");
    fetchComments(index);
  }




  return (
    <Card
      variant="bordered"
      isPressable
      //color='black' does't work, try CSS
      //className='bg-black'
      key={uuidv4()}
      onPress={() => {
        handleCard(index);
      }}>
      <Card.Header>
        <Text b>{element.name}</Text>
      </Card.Header>
      {/*<Card.Divider />*/}
      <Text className="ml-3 mr-3">{element.address}</Text>
      {/*<Card.Body>
  <Text>{element.address}</Text>
</Card.Body>*/}
      <Card.Divider />
      <Card.Footer>
        <Button
          size="sm"
          color="warning"
          onClick={() => {
            moreInfo(index);
          }}>
          More Info
        </Button>
      </Card.Footer>
    </Card>
  );
}
