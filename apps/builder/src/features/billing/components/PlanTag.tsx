import { Tag, TagProps, ThemeTypings } from '@chakra-ui/react'
import { Plan } from 'db'

export const planColorSchemes: Record<Plan, ThemeTypings['colorSchemes']> = {
  [Plan.LIFETIME]: 'purple',
  [Plan.PRO]: 'blue',
  [Plan.OFFERED]: 'orange',
  [Plan.STARTER]: 'orange',
  [Plan.FREE]: 'gray',
  [Plan.CUSTOM]: 'yellow',
}

export const PlanTag = ({
  plan,
  ...props
}: { plan: Plan } & TagProps): JSX.Element => {
  switch (plan) {
    case Plan.LIFETIME: {
      return (
        <Tag
          colorScheme={planColorSchemes[plan]}
          data-testid="lifetime-plan-tag"
          {...props}
        >
          Lifetime
        </Tag>
      )
    }
    case Plan.PRO: {
      return (
        <Tag
          colorScheme={planColorSchemes[plan]}
          data-testid="pro-plan-tag"
          {...props}
        >
          Pro
        </Tag>
      )
    }
    case Plan.OFFERED:
    case Plan.STARTER: {
      return (
        <Tag
          colorScheme={planColorSchemes[plan]}
          data-testid="starter-plan-tag"
          {...props}
        >
          Starter
        </Tag>
      )
    }
    case Plan.FREE: {
      return (
        <Tag
          colorScheme={planColorSchemes[Plan.FREE]}
          data-testid="free-plan-tag"
          {...props}
        >
          Free
        </Tag>
      )
    }
    case Plan.CUSTOM: {
      return (
        <Tag
          colorScheme={planColorSchemes[Plan.CUSTOM]}
          data-testid="free-plan-tag"
          {...props}
        >
          Custom
        </Tag>
      )
    }
  }
}
