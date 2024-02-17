import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface BotAvatarProps {
  src?: string;
}

export const BotAvatar = ({ src = "/logo-two.png" }: BotAvatarProps) => {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage className="p-1" src={src} />
    </Avatar>
  );
};
