import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();
  let isActive = false;

  // Serve para mudar a cor do link que é o atual somente se for a url exata
  // Verifica se a rota é exatamente /users, não se aplica a extensão de rotas, por exemplo /users/create
  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  // Serve para mudar a cor do link quando tiver em uma extensão da rota, por exemplo users/create
  // Verifica se começa com users, se começar, muda a cor
  if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, { color: isActive ? "pink.400" : "gray.50" })}
    </Link>
  );
}
