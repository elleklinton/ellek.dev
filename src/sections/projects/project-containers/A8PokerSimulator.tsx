import poker_gif from '../../../images/poker.gif'
import github_svg from '../../../images/icons/white/github.svg'
import external_link_svh from '../../../images/icons/white/external-link.svg'
import a8_gameplay_png from '../../../images/a8/gameplay.png'
import React from 'react'
import { BaseProject } from '../BaseProject'
import { scrollTo } from '../../../NavBar'

type TFutureIdeaListItem = {
    title: string
    children: any
}
function FutureIdeaListItem({ title, children }: TFutureIdeaListItem) {
    return (
        <li
            style={{
                marginLeft: 20,
                marginTop: 10,
                marginBottom: 10,
            }}
        >
            {'- '}
            <a style={{ fontWeight: 'var(--font-weight-semibold)' }}>{title}</a>
            {': '}
            {children}
        </li>
    )
}

function A8PokerSimulator() {
    return (
        <BaseProject
            projectId={'a8'}
            title={'A8 Poker Simulator'}
            subtitle={'(Work In Progress)'}
            icons={[
                {
                    image: github_svg,
                    link: '/a8/github',
                    hoverText: 'Github',
                },
                {
                    image: external_link_svh,
                    link: '/a8/app',
                    hoverText: 'Open App',
                },
            ]}
        >
            <div>
                Welcome to the cutting-edge realm of the A8 Poker Simulator,
                where the stakes are high, and the competition is fueled by AI.
                Named after my favorite poker hand, Ace-8 (a.k.a. "
                <a
                    target="_blank"
                    href="https://en.wikipedia.org/wiki/Dead_man%27s_hand"
                >
                    Dead Man's Hand
                </a>
                "), this simulator offers a unique blend of strategy,
                psychology, and technology, immersing you in a poker experience
                like no other. Although still a basic work-in-progress, I have
                exciting features planned for the future of A8!
                <br />
                <br />
                At its core, the A8 Poker Simulator leverages the power of the
                ChatGPT API to create a dynamic and unpredictable poker
                environment. You're not just playing against algorithms; you're
                facing off against nine distinct AI personalities, each with its
                own style and strategy. From the daring bluffs of the aggressive
                player to the calculated risks of the cautious strategist, every
                game unfolds in its own unpredictable narrative, just like a
                real poker tournament! But A8 isn't just about playing poker;
                it's about understanding it and exploring how well different
                playing strategies work.
                <br />
                <br />
                With a bit more development work, I want to turn A8 into a
                simulator that allows you to delve into the nuances of each
                hand, offering insights and strategies that go beyond the
                basics. Whether you're a seasoned pro or a curious newcomer, I
                aim for A8 to provide a rich, engaging platform to hone your
                skills, test different theories, and explore the infinite
                complexities of poker.
                <br />
                <br />I have many exciting ideas for the future of A8,
                including:
                <ul>
                    <FutureIdeaListItem title={'Undo Functionality'}>
                        This feature would allow you to revisit your previous
                        moves, providing an invaluable learning opportunity.
                        Whether you're second-guessing a fold or reconsidering a
                        bet, the undo functionality would offer a chance to see
                        how different decisions could impact the game, offering
                        a unique layer of strategic depth and introspection.
                    </FutureIdeaListItem>
                    <FutureIdeaListItem title={'Customizable AI Opponents'}>
                        This enhancement would let you tailor the virtual
                        competition to your preference, creating scenarios with
                        varying degrees of difficulty and strategic styles.
                        Whether you wish to face a table of aggressive bettors
                        or test your patience against defensive players, this
                        feature would enable a personalized poker experience,
                        enriching your tactical understanding and adaptability.
                    </FutureIdeaListItem>
                    <FutureIdeaListItem title={'Interactive Gameplay Dialogue'}>
                        Envision engaging in psychological tactics not just
                        through your bets and folds, but through dialogue with
                        AI opponents. This feature would introduce an element of
                        communication, where you could bluff, taunt, or express
                        surprise, influencing the AI players' reactions and
                        decisions. It would add a new dimension to the game,
                        mirroring the human elements of poker strategy and
                        interaction.
                    </FutureIdeaListItem>
                    <FutureIdeaListItem title={'Advanced Analytics Dashboard'}>
                        By leveraging my{' '}
                        <a
                            href={'pied-poker'}
                            // style={{ scrollBehavior: 'smooth' }}
                            onClick={(e) => {
                                e.preventDefault()
                                scrollTo('pied-poker')
                            }}
                        >
                            Pied Poker
                        </a>{' '}
                        poker probability calculator, I could easily create a
                        robust analytics dashboard for your current situation.
                        By leveraging Pied Poker's powerful simulation engine,
                        A8 would offer a nuanced understanding of each game
                        scenario. Users could analyze potential outcomes,
                        understand the likelihood of various hands, and evaluate
                        strategic decisions with unprecedented depth. This
                        integration would not only enrich the user's experience
                        by providing detailed insights into the statistical
                        landscape, but also empower players to use real-time
                        data to refine their strategies and decision-making
                        processes.
                    </FutureIdeaListItem>
                </ul>
                <br />
                <br />
                <img
                    src={a8_gameplay_png}
                    className="project-image"
                    alt="A8 Gameplay"
                />
                <br />
                <br />
                A8 is very much still a work-in-progress, but I'm excited to
                continue developing it to create a powerful poker simulator.
                Check out the{' '}
                <a target="_blank" rel="noopener noreferrer" href="/a8/app">
                    App Website
                </a>{' '}
                and{' '}
                <a target="_blank" rel="noopener noreferrer" href="/a8/github">
                    GitHub source code
                </a>{' '}
                to play around for yourself!
                <br />
                <br />
                <i>
                    Note: As it is still under active development, A8 requires
                    you to input your OpenAI API key at the top of the
                    simulator, if you wish to utilize the ChatGPT integration.
                </i>
            </div>
        </BaseProject>
    )
}

export default A8PokerSimulator
