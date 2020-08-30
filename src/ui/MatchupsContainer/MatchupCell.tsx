import React, {
  useState,
  useRef,
  useCallback,
  memo,
} from 'react'
import { FlattenInterpolation } from 'styled-components'

import Team from 'model/team/Club'

import usePrevious from 'utils/hooks/usePrevious'

import ContentWithFlag from 'ui/table/ContentWithFlag'
import DummyContent from 'ui/table/DummyContent'
import MovingDiv from 'ui/MovingDiv'

import MatchupCellContainer from './MatchupCellContainer'
import getTeamCountryName from './getTeamCountryName'

interface Props {
  team: Team,
  containerStyles?: FlattenInterpolation<any>,
}

const MatchupCell = ({
  team,
  containerStyles,
}: Props) => {
  const prevTeam = usePrevious(team)
  const [displayedTeam, setDisplayedTeam] = useState(team)
  const to = useRef<HTMLElement | null>(null)

  const fill = useCallback(() => {
    setDisplayedTeam(team)
  }, [team])

  return (
    <>
      <MatchupCellContainer
        hasTeam={!!displayedTeam}
        styles={containerStyles}
      >
        {displayedTeam ? (
          <ContentWithFlag country={getTeamCountryName(displayedTeam)}>
            {displayedTeam.shortName ?? displayedTeam.name}
          </ContentWithFlag>
        ) : (
          <DummyContent ref={to} />
        )}
      </MatchupCellContainer>
      {team && team !== prevTeam && (
        <MovingDiv
          from={`[data-cellid='${team.id}']`}
          to={to}
          duration={350}
          data={team}
          onAnimationEnd={fill}
        />
      )}
    </>
  )
}

export default memo(MatchupCell)
