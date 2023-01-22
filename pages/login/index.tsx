import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../../components/account'
import { NavBar } from '../../components/NavBar/NavBar'

const Login = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <>
    <NavBar/>
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? (
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
      ) : (
        <Account session={session} />
      )}
    </div>
    </>
  )
}

export default Login