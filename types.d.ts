import { Source } from 'callbag';

export default function scan<I, O>(
  reducer: (acc: O, d: I) => O,
  seed?: O,
): (source: Source<I>) => Source<O>;
