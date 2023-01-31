import { useState, useEffect } from "react";
import {
  useUser,
  useSupabaseClient,
  Session,
} from "@supabase/auth-helpers-react";
import { Database } from "../types/supabase";
import { useSearchContext } from "../context/search";
import { Label, TextInput, Button } from "flowbite-react";
import { useRouter } from "next/navigation";
type Profiles = Database["public"]["Tables"]["profiles"]["Row"];

export default function Account({ session }: { session: Session }) {
  const supabase = useSupabaseClient<Database>();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<Profiles["username"]>(null);
  const [website, setWebsite] = useState<Profiles["website"]>(null);
  const [avatar_url, setAvatarUrl] = useState<Profiles["avatar_url"]>(null);
  const router = useRouter();

  const { setUsernameGlobal, usernameGlobal, userNum, setUserNum }: any = useSearchContext();

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!user) throw new Error("No user");

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, website, avatar_url`)
        .eq("id", user.id)
        .single();
        setUserNum(user.id)

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setUsernameGlobal(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);    
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function nameChange (){
    setUsernameGlobal("")
    setUserNum()
    router.push("/")
  }
  
  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: Profiles["username"];
    website: Profiles["website"];
    avatar_url: Profiles["avatar_url"];
  }) {
    try {
      setLoading(true);
      if (!user) throw new Error("No user");

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-4 max-w-lg">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder={session.user.email}
          disabled={true}
          //required={true}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username1" value="Your username" />
        </div>
        <TextInput
          id="username1"
          onChange={(e) => setUsername(e.target.value)}
          placeholder={usernameGlobal}
        />
      </div>
      {/* <div>
        <div className="mb-2 block">
          <Label htmlFor="website1" value="Your website" />
        </div>
        <TextInput
          id="website1"
          onChange={(e) => setWebsite(e.target.value)}
          //placeholder={session.user.website}
        />
      </div> */}
      <Button
        type="submit"
        onClick={() => updateProfile({ username, website, avatar_url })}
      >
        Update
      </Button>
      <Button
        type="submit"
        color="failure"
        onClick={() => { nameChange(); supabase.auth.signOut()}}
      >
        Sign Out
      </Button>
    </div>
  );
}
