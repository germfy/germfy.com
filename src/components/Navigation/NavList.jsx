import React from "react";
import FontIcon from "react-md/lib/FontIcons";
import { Link } from "gatsby";

function GetNavList(config) {
  const NavList = [
    {
      primaryText: "Página principal",
      leftIcon: <FontIcon>home</FontIcon>,
      component: Link,
      to: "/"
    },
    {
      divider: true
    },
    {
      primaryText: "Experiencia laboral",
      leftIcon: <FontIcon>business_center</FontIcon>,
      component: Link,
      to: "/"
    },
    {
      primaryText: "Tecnologías",
      leftIcon: <FontIcon>alternate_email</FontIcon>,
      component: Link,
      to: "/"
    },
    {
      primaryText: "Formación académica",
      leftIcon: <FontIcon>school</FontIcon>,
      component: Link,
      to: "/"
    },
    {
      divider: true
    },
  ];

  if (config.userLinks) {
    config.userLinks.forEach(link => {
      NavList.push({
        primaryText: link.label,
        leftIcon: <FontIcon forceSize iconClassName={link.iconClassName} />,
        component: "a",
        href: link.url
      });
    });
  }

  NavList.push({ divider: true });

  NavList.push({
    primaryText: "About",
    leftIcon: <FontIcon>person</FontIcon>,
    component: Link,
    to: "/about/"
  });
  return NavList;
}
export default GetNavList;
