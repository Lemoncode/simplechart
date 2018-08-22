import { D3Selection } from '../../../types';
import { SVG_SHADOW_ID } from './constants';

interface Props {
  svg: D3Selection;
}

export const shadowDefinitions = (props: Props) => {
  render(props);
};

const render = ({ svg }: Props) => {
  const defs = svg.append('defs');

  const filter = defs
    .append('filter')
    .attr('id', SVG_SHADOW_ID)
    .attr('filterUnits', 'userSpaceOnUse');

  filter.append('feGaussianBlur')
    .attr('in', 'SourceAlpha')
    .attr('stdDeviation', 3);

  filter.append('feOffset')
    .attr('dx', 0)
    .attr('dy', 0);

  filter.append('feComponentTransfer')
    .append('feFuncA')
    .attr('type', 'linear')
    .attr('slope', 0.2);

  const feMerge = filter.append('feMerge');
  feMerge.append('feMergeNode');
  feMerge.append('feMergeNode')
    .attr('in', 'SourceGraphic');
};
