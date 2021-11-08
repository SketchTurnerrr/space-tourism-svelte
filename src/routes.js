import Home from './routes/Home.svelte';
import Destination from './routes/Destination.svelte';
import Moon from './routes/Destination/Moon.svelte';
import Mars from './routes/Destination/Mars.svelte';
import Europa from './routes/Destination/Europa.svelte';
import Titan from './routes/Destination/Titan.svelte';
import Crew from './routes/Crew.svelte';
import Mark from './routes/Crew/Mark.svelte';
import Victor from './routes/Crew/Victor.svelte';
import Anousheh from './routes/Crew/Anousheh.svelte';
import Technology from './routes/Technology.svelte';
import Spaceport from './routes/Technology/Spaceport.svelte';
import SpaceCapsule from './routes/Technology/SpaceCapsule.svelte';
import NotFound from './routes/NotFound.svelte';

export default {
  '/': Home,
  '/destination': Destination,
  '/destination/moon': Moon,
  '/destination/mars': Mars,
  '/destination/europa': Europa,
  '/destination/titan': Titan,
  '/crew': Crew,
  '/crew/mark-shuttleworth': Mark,
  '/crew/victor-glover': Victor,
  '/crew/anousheh-ansari': Anousheh,
  '/technology': Technology,
  '/technology/spaceport': Spaceport,
  '/technology/space-capsule': SpaceCapsule,
  // The catch-all route must always be last
  '*': NotFound,
};
