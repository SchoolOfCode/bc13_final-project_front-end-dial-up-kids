import { createContext, useContext, useState } from 'react';

export const SearchContext = createContext([] as any);

// Context provider
export function SearchContextProvider({children}: any) {
	
	const[search, setSearch] = useState('')
	const[text, setText] = useState('')

	return <SearchContext.Provider value={[search, setSearch, text, setText]} >
		{children}
	</SearchContext.Provider>
}

// Custom hook
export function useSearchContext() {
	return useContext(SearchContext)
}