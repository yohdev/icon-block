/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Placeholder, Button } from '@wordpress/components';
import { Icon } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import './editor.scss';
import icons from './icons';
import { bolt } from './icons/bolt';
import { QuickInserterPopover } from './quick-inserter';

export default function IconPlaceholder( props ) {
	const {
		setInserterOpen,
		isQuickInserterOpen,
		setQuickInserterOpen,
		isCustomInserterOpen,
		setCustomInserterOpen,
		setAttributes
	} = props;

	return (
		<Placeholder className="wp-block-outermost-icon-placeholder">
			<div className="wp-block-outermost-icon-placeholder__preview">
				<Icon icon={ bolt } />
			</div>
			<div className="wp-block-outermost-icon-placeholder__controls">
				<div className="wp-block-outermost-icon-placeholder__actions">
					<div
						className="wp-block-outermost-icon-placeholder__actions__indicator"
					>
						<Icon icon={ bolt } /> { __( 'Icon Block' ) }
					</div>
					<Button
						variant="primary"
						onClick={ () => setQuickInserterOpen( true ) }
					>
						{ __( 'Browse icon Library', 'icon-block' ) }
					</Button>
					<QuickInserterPopover
						setInserterOpen={ setInserterOpen }
						isQuickInserterOpen={ isQuickInserterOpen }
						setQuickInserterOpen={ setQuickInserterOpen }
						setAttributes={ setAttributes }
					/>
					<Button
						variant="secondary"
						onClick={ () => setCustomInserterOpen( true ) }
					>
						{ __( 'Add custom icon', 'icon-block' ) }
					</Button>
				</div>
			</div>
		</Placeholder>
	);
}
