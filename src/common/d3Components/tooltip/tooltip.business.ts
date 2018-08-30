import { State, Props } from './tooltip.state';
import { mouse } from 'd3';
const styles = require('./tooltip.scss');

export const showTooltip = (props: Props, state: State, message: string) => {
  state.tooltip
    .html(message);
  updateTooltipPosition(props, state);
  state.tooltip
    .classed(styles.hidden, false);
};

export const updateTooltipPosition = ({ xOffset = 25, yOffset = 40 }: Props, state: State) => {
  const [x, y] = mouse(document.body);

  state.tooltip
    .style('left', `${x + xOffset}px`)
    .style('top', `${y + yOffset}px`);
};

export const hideTooltip = (state: State) => state.tooltip
  .classed(styles.hidden, true);
