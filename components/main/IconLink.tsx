import React from 'react';

interface IconLinkProps {
  href: string;
  target?: string;
  rel?: string;
  icon: React.ElementType;
  label: string;
}

const IconLink: React.FC<IconLinkProps> = ({ href, target, rel, icon: Icon, label }) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="flex flex-row items-center my-[15px] cursor-pointer"
    >
      <Icon className="mr-[6px]" />
      <span className="text-[15px] underline">{label}</span>
    </a>
  );
};

export default IconLink;
