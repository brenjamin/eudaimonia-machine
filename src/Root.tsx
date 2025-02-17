import {Composition, Still} from 'remotion';
import {Main} from './Main';
import {Scene1DeepWorkIsRare} from './Scene1DeepWorkIsRare';
import {Scene1aKnowledgeWorkers} from './Scene1aKnowledgeWorkers';
import {Scene2DeepWorkIsHard} from './Scene2DeepWorkIsHard';
import {Scene3EudaimoniaMachine} from './Scene3EudaimoniaMachine';
import {Scene4Eudaimonia} from './Scene4Eudaimonia';
import {Scene4aAchieveEudaimonia} from './Scene4aAchieveEudaimonia';
import {Scene5DavidDewane} from './Scene5DavidDewane';
import {Scene6Building} from './Scene6Building';
import {Scene7OpenOffices} from './Scene7OpenOffices';
import {Scene8MachinePurpose} from './Scene8MachinePurpose';
import {Scene9Gallery} from './Scene9Gallery';
import {Scene10Salon} from './Scene10Salon';
import {Scene11Library} from './Scene11Library';
import {Scene12Office} from './Scene12Office';
import {Scene13DeepWorkChambers} from './Scene13DeepWorkChambers';
import {Scene14EudaimoniaOutro} from './Scene14EudaimoniaOutro';
import {Scene15Outro} from './Scene15Outro';
import {Narration} from './Narration';
import {Thumbnail} from './Thumbnail';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Scene1DeepWorkIsRare"
				component={Scene1DeepWorkIsRare}
				durationInFrames={420}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Scene1aKnowledgeWorkers"
				component={Scene1aKnowledgeWorkers}
				durationInFrames={420}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Scene2DeepWorkIsHard"
				component={Scene2DeepWorkIsHard}
				durationInFrames={180}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Scene3EudaimoniaMachine"
				component={Scene3EudaimoniaMachine}
				durationInFrames={180}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Scene4Eudaimonia"
				component={Scene4Eudaimonia}
				durationInFrames={240}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Scene4aAchieveEudaimonia"
				component={Scene4aAchieveEudaimonia}
				durationInFrames={940}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Scene5DavidDewane"
				component={Scene5DavidDewane}
				durationInFrames={620}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Scene6Building"
				component={Scene6Building}
				durationInFrames={240}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Scene7OpenOffices"
				component={Scene7OpenOffices}
				durationInFrames={240}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Scene8MachinePurpose"
				component={Scene8MachinePurpose}
				durationInFrames={240}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Scene9Gallery"
				component={Scene9Gallery}
				durationInFrames={240}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Scene10Salon"
				component={Scene10Salon}
				durationInFrames={240}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Scene11Library"
				component={Scene11Library}
				durationInFrames={240}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Scene12Office"
				component={Scene12Office}
				durationInFrames={240}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Scene13DeepWorkChambers"
				component={Scene13DeepWorkChambers}
				durationInFrames={240}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Scene14EudaimoniaOutro"
				component={Scene14EudaimoniaOutro}
				durationInFrames={1020}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Scene15Outro"
				component={Scene15Outro}
				durationInFrames={715}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Narration"
				component={Narration}
				durationInFrames={2370 + 720 + 930}
				fps={30}
				width={1920}
				height={1080}
			></Composition>
			<Composition
				id="Main"
				component={Main}
				durationInFrames={10350}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Still id="Thumbnail" component={Thumbnail} width={1920} height={1080} />
		</>
	);
};
