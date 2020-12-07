import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { GiPartyPopper } from "react-icons/gi";
import { Avatar } from 'antd';

import { signOut } from "../../store/modules/auth/actions";

import { Container, Content, Profile } from "./styles";

export default function Header() {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <GiPartyPopper size={40} />
        </nav>
        <aside>
          <Link to="/">
            Inicio
          </Link>
          <Profile>
            <div>
              <strong>
                {profile.name}
              </strong>
            </div>
            <Avatar>{profile.name.split("")[0]}</Avatar>
            {/* <div>
              <Link to="/editarpefil">Editar perfil</Link>
            </div> */}
            <button onClick={handleSignOut}>
              <FiLogOut size={20} color={"#f64c75"} />
              {/* <strong>Sair</strong> */}
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
