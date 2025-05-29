import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { LayoutContainer, UserInfo, SignOutButton } from './Layout.styles'
import { LogOut } from 'lucide-react'

const Layout = ({ children }) => {
    const { user, signOut } = useAuth()

    return (
        <LayoutContainer>
            {user && (
                <UserInfo>
                    <span>Signed in as: {user.email}</span>
                    <SignOutButton onClick={signOut}>
                        <LogOut size={16} />
                        Sign Out
                    </SignOutButton>
                </UserInfo>
            )}
            {children}
        </LayoutContainer>
    )
}

export default Layout