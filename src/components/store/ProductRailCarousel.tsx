import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { Box, Button, IconButton, Paper, Stack, Typography } from '@mui/material';
import type { ReactNode } from 'react';
import { useCallback, useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

export type ProductRailSectionVariant = 'featured' | 'similar' | 'plain';

interface Props {
  title: string;
  subtitle?: string;
  children: ReactNode;
  /** Visual treatment for merchandising blocks (home + PDP). */
  sectionVariant?: ProductRailSectionVariant;
  /** “View all” link target; omit to hide the control. */
  viewAllTo?: string;
  /** Hide left/right scroll controls (e.g. when “View all” is the primary browse affordance). */
  hideScrollArrows?: boolean;
}

const SCROLL_AMOUNT = 340;

const sectionShell: Record<ProductRailSectionVariant, { paper: object; overline: string; overlineColor: string }> = {
  featured: {
    paper: {
      borderRadius: 4,
      overflow: 'hidden',
      border: '1px solid',
      borderColor: 'rgba(124, 58, 237, 0.18)',
      borderLeftWidth: 4,
      borderLeftColor: 'primary.main',
      background: 'linear-gradient(145deg, #faf5ff 0%, #ffffff 42%, #fdf4ff 100%)',
      boxShadow: '0 16px 48px rgba(88, 28, 135, 0.08)'
    },
    overline: 'Featured',
    overlineColor: 'primary.main'
  },
  similar: {
    paper: {
      borderRadius: 4,
      overflow: 'hidden',
      border: '1px solid',
      borderColor: 'rgba(234, 88, 12, 0.2)',
      borderLeftWidth: 4,
      borderLeftColor: 'warning.main',
      background: 'linear-gradient(145deg, #fffbeb 0%, #ffffff 45%, #fff7ed 100%)',
      boxShadow: '0 16px 48px rgba(154, 52, 18, 0.07)'
    },
    overline: 'Curated picks',
    overlineColor: 'warning.dark'
  },
  plain: {
    paper: {
      borderRadius: 4,
      overflow: 'hidden',
      border: '1px solid',
      borderColor: 'divider',
      bgcolor: '#ffffff',
      boxShadow: '0 8px 32px rgba(15, 23, 42, 0.06)'
    },
    overline: '',
    overlineColor: 'text.secondary'
  }
};

export default function ProductRailCarousel({
  title,
  subtitle,
  children,
  sectionVariant = 'plain',
  viewAllTo,
  hideScrollArrows = false
}: Props) {
  const railRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const dragStartX = useRef(0);
  const scrollStart = useRef(0);
  const shell = sectionShell[sectionVariant];

  const scrollBy = useCallback((dir: -1 | 1) => {
    railRef.current?.scrollBy({ left: dir * SCROLL_AMOUNT, behavior: 'smooth' });
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!railRef.current) return;
    setDragging(true);
    dragStartX.current = e.pageX;
    scrollStart.current = railRef.current.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging || !railRef.current) return;
    e.preventDefault();
    const delta = e.pageX - dragStartX.current;
    railRef.current.scrollLeft = scrollStart.current - delta;
  };

  const endDrag = () => setDragging(false);

  return (
    <Paper elevation={0} sx={{ p: { xs: 2.25, md: 3 }, ...shell.paper }}>
      <Stack spacing={2.25}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent='space-between'
          alignItems={{ sm: 'flex-start' }}
          spacing={1.5}>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            {shell.overline && (
              <Typography
                variant='overline'
                sx={{
                  color: shell.overlineColor,
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  display: 'block',
                  mb: 0.5
                }}>
                {shell.overline}
              </Typography>
            )}
            <Typography variant='h5' fontWeight={800} sx={{ letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              {title}
            </Typography>
            {subtitle && (
              <Typography variant='body2' color='text.secondary' sx={{ mt: 0.75, maxWidth: 560 }}>
                {subtitle}
              </Typography>
            )}
          </Box>
          <Stack direction='row' spacing={1} alignItems='center' flexShrink={0}>
            {viewAllTo ? (
              <Button
                component={RouterLink}
                to={viewAllTo}
                endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />}
                sx={{ textTransform: 'none', fontWeight: 700, whiteSpace: 'nowrap' }}>
                View all
              </Button>
            ) : null}
            {!hideScrollArrows && (
              <Stack direction='row' spacing={0.5} sx={{ display: { xs: 'none', sm: 'flex' } }}>
                <IconButton
                  aria-label='scroll left'
                  onClick={() => scrollBy(-1)}
                  size='small'
                  sx={{ bgcolor: 'background.paper', boxShadow: 1, border: '1px solid', borderColor: 'divider' }}>
                  <ChevronLeftRoundedIcon />
                </IconButton>
                <IconButton
                  aria-label='scroll right'
                  onClick={() => scrollBy(1)}
                  size='small'
                  sx={{ bgcolor: 'background.paper', boxShadow: 1, border: '1px solid', borderColor: 'divider' }}>
                  <ChevronRightRoundedIcon />
                </IconButton>
              </Stack>
            )}
          </Stack>
        </Stack>

        <Box
          sx={{
            position: 'relative',
            borderRadius: 3,
            bgcolor: 'rgba(255,255,255,0.65)',
            border: '1px solid',
            borderColor: 'rgba(15, 23, 42, 0.06)',
            py: 2,
            px: { xs: 1, sm: 1.5 },
            background:
              sectionVariant === 'featured'
                ? 'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(250,245,255,0.5) 100%)'
                : sectionVariant === 'similar'
                  ? 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,251,235,0.45) 100%)'
                  : 'linear-gradient(180deg, #ffffff 0%, rgba(248, 250, 252, 0.9) 100%)'
          }}>
          {!hideScrollArrows && (
            <>
              <IconButton
                aria-label='previous'
                onClick={() => scrollBy(-1)}
                size='small'
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  position: 'absolute',
                  left: 4,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 1,
                  bgcolor: 'background.paper',
                  boxShadow: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  '&:hover': { bgcolor: 'background.paper' }
                }}>
                <ChevronLeftRoundedIcon />
              </IconButton>
              <IconButton
                aria-label='next'
                onClick={() => scrollBy(1)}
                size='small'
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  position: 'absolute',
                  right: 4,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 1,
                  bgcolor: 'background.paper',
                  boxShadow: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  '&:hover': { bgcolor: 'background.paper' }
                }}>
                <ChevronRightRoundedIcon />
              </IconButton>
            </>
          )}

          <Box
            ref={railRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseLeave={endDrag}
            onMouseUp={endDrag}
            sx={{
              display: 'flex',
              gap: { xs: 1.75, sm: 2.25 },
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              px: { md: hideScrollArrows ? 1.5 : 4 },
              py: 0.5,
              mx: { md: hideScrollArrows ? 0 : 0.5 },
              cursor: dragging ? 'grabbing' : 'grab',
              scrollbarWidth: 'thin',
              WebkitOverflowScrolling: 'touch',
              userSelect: dragging ? 'none' : 'auto',
              '& > *': { scrollSnapAlign: 'start', flexShrink: 0 },
              maskImage: { md: 'linear-gradient(90deg, transparent 0%, #000 2%, #000 98%, transparent 100%)' },
              WebkitMaskImage: { md: 'linear-gradient(90deg, transparent 0%, #000 2%, #000 98%, transparent 100%)' }
            }}>
            {children}
          </Box>
        </Box>
      </Stack>
    </Paper>
  );
}
