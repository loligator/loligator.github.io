import imgProfilePic from './Image/ProfilePic.png';

export const Descriptions = {
	MadeInTheShade:
		'Made In The Shade is a stealth game made as a college project. From a top-down perspective, the player uses abilities to evade robot guards and pull off heists.',
	DualProcessors:
		'Dual Processors is a top down shooter made as a college project. The main theme is playing as a process defending the computer from viruses split between two processor cores.',
};

export interface BioContent {
	ProfilePic: string;
	Intro: string;
	WhereIWork: string;
	AboutGameDev: string;
}

export const CMcDBioContent = {
	ProfilePic: imgProfilePic,
	Intro:
		'Greetings, fellow human! My name is Connor McDermott, I am a Software Engineer with a love for gameplay programming, .NET, Linux, and Pizza.',
	WhereIWork:
		'I am currently looking for full-time work! My work is mostly focused on .NET and web development. I typically take on a full stack approach, as I like to have a sense of what goes on top to bottom, otherwise debugging can get very mysterious!',
	AboutGameDev:
		"While it's not my day job, I'm very passionate about Game Development as a hobby. I always have a game project in progress! I'm currently (slowly) working on a Resident Evil inspired top-down shooter in Unity.",
};

export interface Social {
	Name: string;
	ImgUrl: URL | string;
	Url: URL;
}

export const CopyWrite =
	'©2021 Design by Nikita Kumar, Dev by Connor McDermott';
