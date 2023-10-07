import { ActionRowBuilder, AnyComponentBuilder, ButtonBuilder, ButtonStyle, LinkButtonComponentData, TextInputBuilder, TextInputComponentData, EmbedAuthorData, ImageURLOptions, User } from "discord.js";

export function createRow<Component extends AnyComponentBuilder>
  (...components: Component[]) {
  return new ActionRowBuilder<Component>({ components });
}

export function createModalInput(data: Omit<TextInputComponentData, "type">) {
  return createRow(new TextInputBuilder(data))
}

export function createLinkButton(data: Omit<LinkButtonComponentData, "style" | "type">) {
  if (!data.label) data.label = data.url;
  return new ButtonBuilder({ style: ButtonStyle.Link, ...data });
}

export function createEmbedAuthor({
  user, property = "displayName", imageSize: size = 512,
  iconURL, url, prefix = "", suffix = ""
}: {
  user: User,
  property?: keyof Pick<User, "username" | "displayName" | "id">
  imageSize?: ImageURLOptions["size"],
  iconURL?: string, url?: string, prefix?: string, suffix?: string,
}): EmbedAuthorData {
  return {
    name: `${prefix}${user[property]}${suffix}`, url,
    iconURL: iconURL || user.displayAvatarURL({ size })
  };
}