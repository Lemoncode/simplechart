import { cnc } from '../../helpers/classname';
import { createEmptyState, State, Props } from './tooltip.state';
import { showTooltip, updateTooltipPosition, hideTooltip } from './tooltip.business';
const styles = require('./tooltip.scss');

export const tooltipD3Component = (props: Props) => {
  const state = createEmptyState();
  state.tooltip = render(props);

  return {
    onShowTooltip: onShowTooltip(props, state),
    onHideTooltip: onHideTooltip(state),
    onUpdateTooltipPosition: onUpdateTooltipPosition(props, state),
  };
};

const render = (props: Props) => props.node
  .append('div')
  .attr('class', cnc(styles.tooltip, styles.hidden));

const onShowTooltip = (props: Props, state: State) => (message: string) => showTooltip(props, state, message);

const onUpdateTooltipPosition = (props: Props, state: State) => () => updateTooltipPosition(props, state);

const onHideTooltip = (state: State) => () => hideTooltip(state);
