import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
    display: flex;
    flex-direction: ${(props) => props.direction};
    height: fit-content;
`
const NavItem = styled.div`
    margin-bottom: 0.2rem;
    cursor: pointer;
    padding: 5px 10px 5px 10px;
    color: ${(props) => (props.active ? props.colorActiveItemText : 'black')};
    background-color: ${(props) =>
        props.active ? props.colorActiveItem : props.colorItem};
`

const Navbar = ({
    menuItems,
    activeMenuItemId,
    setMenuItemId,
    direction,
    colorActiveItem,
    colorActiveItemText,
}) => {
    const changeCurrentItem = (id) => {
        setMenuItemId(id)
    }

    const links = menuItems.map((item) => {
        let active = false

        if (item.id === activeMenuItemId) {
            active = true
        }
        return (
            <NavItem
                active={active}
                key={item.id}
                onClick={() => changeCurrentItem(item.id)}
                colorActiveItemText={colorActiveItemText}
                colorActiveItem={colorActiveItem}
            >
                {item.title}
            </NavItem>
        )
    })

    return (
        <Main className="paper" direction={direction}>
            {links}
        </Main>
    )
}

export default Navbar
