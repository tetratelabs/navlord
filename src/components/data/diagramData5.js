import Play from "../../assets/play-button.svg";
import read from "../../assets/read.svg";
import Chris from "../../assets/Chris.jpg";
import Matt from "../../assets/matt-klein.jpg";
import David from "../../assets/David.jpg";
import Suresh from "../../assets/Suresh.jpg";
import Liam from "../../assets/Liam.jpg";
import Zack from "../../assets/Zack.jpg";
import Varun from "../../assets/Varun.jpg";
import Louis from "../../assets/Louis.jpg";
import Shri from "../../assets/ShriLouis.jpg";
import Larry from "../../assets/Larry.jpg";
import Eric from "../../assets/Eric.jpg";
import Opencensus from "../../assets/Opencensus.jpg";
import Eyeview from "../../assets/Eyeview.jpg";
import getenvoy from "../../assets/getenvoy.jpg";
import amazoneks from "../../assets/amazoneks.jpg";
import autotrader from "../../assets/autotrader.jpg";
import varunlouis from "../../assets/varunlouis.jpg";
import nav from "../../assets/nav.jpg";
import istioenvoy from "../../assets/istioenvoy.jpg";
import servicebridge from "../../assets/servicebridge.jpg";
import freddie from "../../assets/freddie.jpg";
import podcast1 from "../../assets/podcast1.jpg";



export const diagramData = [
    {
        infotype: "Podcasts",
        title:
            "Podcast: Envoy proxy extensibility with WebAssembly (Wasm) and the GetEnvoy Toolkit",
        alt: "Envoy Proxy Extensibility",
        nodetype: "Envoy",
        pic: podcast1,
        icon: Play,
        time: 9,
        overview:
            "In this Make IT Mesh Video Podcast, Tetrate engineer Yaroslav Skopets describes new tooling that makes it easier for end users to build extensions to the edge and service proxy, Envoy.",
        tags: "podcast;envoy",
        url: "https://www.tetrate.io/blog/how-to-get-started-with-envoy-extensions-wasm-and-getenvoy/",
    },
    {
        infotype: "Podcasts",
        title:
            "Podcast: How Istio is bringing Virtual Machines into the mesh",
        alt: "VMs in Istio",
        nodetype: "Istio",
        pic: podcast1,
        icon: Play,
        time: 11,
        overview:
            "The release of Istio 1.7 was highly anticipated by the service mesh community and end-users because it addresses a problem that Tetrate was founded to solve: Bringing VMs into the mesh. Tia Louden sat down with Tetrate Engineer, Cynthia Coan - Envoy contributor, GetEnvoy maintainer and Istio 1.7 release manager - to discuss the recent work within Istio to make VMs first-class citizens in Istio service mesh.",
        tags: "podcast;istio",
        url: "https://www.tetrate.io/blog/istio-bringing-vms-into-the-mesh-with-cynthia-coan/",
    },
    {
        infotype: "Whitepapers",
        title: "White Paper: Bridging Brownfield & Greenfield | Tetrate",
        alt: "White Paper: Bridging Brownfield & Greenfield | Tetrate",
        nodetype: "Tetrate",
        pic: servicebridge,
        icon: read,
        time: 10,
        overview:
            "Tetrate Service Bridge, powered by Istio and Envoy, is a self-service, multi-tenant platform to weave and manage the service mesh across VMs and Kubernetes clusters, on-prem and cloud. Developers, security engineers, and operations engineers across multiple teams can safely and securely manage their services without impacting others. A rich set of ecosystem integrations will simplify adoption in enterprise environments.",
        tags: "service bridge; intro",
        url:
            "https://www.tetrate.io/white-paper-bridging-brownfield-greenfield/",
    },
    {
        infotype: "Whitepapers",
        title: "White Paper: Value of Istio & Envoy | Tetrate",
        alt: "White Paper: Value of Istio & Envoy | Tetrate",
        nodetype: "Istio",
        pic: istioenvoy,
        icon: read,
        time: 10,
        overview:
            "In this whitepaper, we will address the what, why, and how of an Istio and Envoy based service mesh. The transition to service-based models driving industry advancement has inadvertently led to increased complexity in service management, networking, and security… problems only a service mesh can solve. Istio is currently the industry-leading open-source service mesh and relies on an Envoy proxy to support it. ",
        tags: "istio; envoy; intro",
        url: "https://www.tetrate.io/white-paper-value-of-istio-envoy/",
    },
    {
        infotype: "Talks and Videos",
        title: "From Brownfield to Greenfield: Istio Service Mesh Journey at Freddie Mac",
        alt: "From Brownfield to Greenfield: Istio Service Mesh Journey at Freddie Mac",
        nodetype: "Istio",
        pic: freddie,
        icon: Play,
        time: 40,
        overview:
            "Freddie Mac is one of the two mortgage loan corporations in the United States managing trillions of dollars of assets across the country. Their infrastructure is spread across different Kubernetes providers, hardware load balancers, and large swaths of virtual machines. In this talk, Shriram Rajagopalan, Tetrate & Lixun Qi, Freddie Mac describe the service mesh adoption journey in a highly regulated financial compliance environment. They discuss both greenfield and brownfield environments, to gain full visibility and traffic management capabilities using Istio/Envoy.",
        tags: "event;talk-videos;service-mesh;istio",
        url: "https://www.youtube.com/watch?v=Rako7zKXquU",
    },
    {
        infotype: "Papers and Guides",
        title: "Istio on EKS",
        alt: "Istio on EKS",
        nodetype: "Istio",
        pic: amazoneks,
        icon: read,
        time: 10,
        overview:
            "Learn how Istio can be installed in a Kubernetes cluster running on AWS using Amazon EKS, and steps to make your applications more resilient.",
        tags: "event;talk-videos;service-mesh;envoy",
        url:
            "https://aws.amazon.com/blogs/opensource/getting-started-istio-eks/",
    },
    {
        infotype: "Papers and Guides",
        title: "Introducing GetEnvoy",
        alt: "GetEnvoy",
        nodetype: "Envoy",
        pic: getenvoy,
        icon: read,
        time: 3,
        overview: "Tetrate provides certified, tested builds of Envoy proxy",
        tags: "envoy; intro",
        url: "https://tetrate.io/blog/announcing-getenvoy/",
    },
    {
        infotype: "Talks and Videos",
        title: "Starting out with Service Mesh",
        alt: "Matt Klein",
        nodetype: "Envoy",
        pic: Matt,
        icon: Play,
        time: 6,
        overview:
            "Envoy creator Matt Klein (Lyft) advises organizations starting with service mesh to make changes incrementally, to solve problems one piece at a time.",
        tags: "event;talk-videos;service-mesh;envoy",
        url: "https://www.youtube.com/watch?v=Lo-6x6NbUVI&feature=youtu.be",
    },
    {
        infotype: "Talks and Videos",
        title: "Adopting Kubernetes? You'll need observability for that.",
        alt: "Chris Aniszczyk",
        pic: Chris,
        icon: Play,
        time: 4,
        nodetype: "Tetrate",
        overview:
            "As companies adopt Kubernetes and reevaluate their architectures, Chris Aniszczyk, CTO/COO of the Cloud Native Computing Foundation predicts they'll look increasingly to mesh to provide observability.",
        tags: "event;talk-videos;kubernetes;cncf;service-mesh",
        url: "https://www.youtube.com/watch?v=9O9im_nLcQQ&feature=youtu.be",
    },
    {
        infotype: "Talks and Videos",
        title: "Use Case: How Verizon used Service Mesh for mTLS and more",
        alt: "Suresh Viswanathan",
        nodetype: "Tetrate",
        pic: Suresh,
        icon: Play,
        time: 5,
        overview:
            "Suresh describes how Verizon media has been using service mesh to secure traffic flow with MTLS without code changes, distribute tracing to troubleshoot, and more.",
        tags: "event;talk-videos;service-mesh",
        url: "https://www.youtube.com/watch?v=sa8R9PD7coc&feature=youtu.be",
    },
    {
        infotype: "Talks and Videos",
        infoid: 8,
        title:
            "Intro to Next Generation Access Control (NGAC) with David Ferraiolo of NIST",
        alt: "David Ferraiolo",
        nodetype: "Tetrate",
        pic: David,
        icon: Play,
        time: 7,
        overview:
            "David of NIST walks through Next Generation Access Control (NGAC), a new approach to delegating and querying access privileges with fine-grained policies.",
        tags: "event;talk-videos;nist;ngac",
        url: "https://www.youtube.com/watch?v=DcpfxYWwAOE",
    },
    {
        infotype: "Talks and Videos",
        title: "Service Mesh: Decoupling of Dev and Network Ops",
        alt: "Louis Ryan",
        nodetype: "Tetrate",
        pic: Louis,
        icon: Play,
        time: 6,
        overview:
            "Louis Ryan of Google explains how service mesh delivers flexibility and control to app developers and administrators and operators abstracting the network's control plane and enabling the enterprise.",
        tags: "event;talk-videos;service-mesh;network",
        url: "https://www.youtube.com/watch?v=Rr3Ftm4p6nc&feature=youtu.be",
    },
    {
        infotype: "Talks and Videos",
        title: "Larry Peterson at Service Mesh Day",
        alt: "Larry Peterson",
        nodetype: "Tetrate",
        pic: Larry,
        icon: Play,
        time: 6,
        overview:
            "Larry Peterson of ONFtalks about federating service meshes and the challenges ahead for building next generation applications.",
        tags: "event;talk-videos;service-mesh",
        url: "https://www.youtube.com/watch?v=mazZvoxxm1w&feature=youtu.be",
    },
    {
        infotype: "Talks and Videos",
        title: "Using Service Mesh for Resilience",
        alt: "Eric Brewer",
        nodetype: "Tetrate",
        pic: Eric,
        icon: Play,
        time: 4,
        overview:
            "UC Berkeley’s Eric Brewer helps avert breakdowns with canary testing and progressive rollouts.",
        tags: "event;talk-videos;canary-testing",
        url: "https://www.youtube.com/watch?v=yFxqnvH9MgQ",
    },
    {
        infotype: "Talks and Videos",
        title: "An Overview of Istio Mesh",
        alt: "Shriram and Louis",
        nodetype: "Istio",
        pic: Shri,
        icon: Play,
        time: 32,
        overview:
            "Istio: Weaving the Service Mesh. By Shriram Rajagopalan & Louis Ryan",
        tags: "event;talk-videos;service-mesh;istio",
        url: "https://www.youtube.com/watch?v=WFEllbmRI8U&t=1s",
    },
    {
        infotype: "Talks and Videos",
        title: "Debugging Istio Networking",
        alt: "Liam White",
        nodetype: "Istio",
        pic: Liam,
        icon: Play,
        time: 117,
        overview:
            "Liam White explains how to debug Istio to test reliability and functions of Istio components.",
        tags: "event;talk-videos;istio",
        url:
            "https://www.youtube.com/watch?v=K2mM3c11WN4&feature=youtu.be&t=4139",
    },
    {
        infotype: "Talks and Videos",
        title: "Connecting, Managing, Observing, and Securing Services",
        alt: "Zack Butcher",
        nodetype: "Tetrate",
        pic: Zack,
        icon: Play,
        time: 50,
        overview:
            "Zack Butcher talks about how a service mesh helps with the transition from monoliths to microservices to empower the organization.",
        tags: "event;talk-videos;miroservices;service-mesh",
        url:
            "https://www.infoq.com/presentations/service-mesh-microservices-2018/",
    },
    {
        infotype: "Talks and Videos",
        title: "GitOps for Istio",
        alt: "Varun Talwar",
        nodetype: "Istio",
        pic: Varun,
        icon: Play,
        time: 38,
        overview:
            "Learn how to manage Istio config like managing code. Varun Talwar's Kubecon Europe 2018 talk.",
        tags: "event;talk-videos;istio;kubecon",
        url: "https://www.youtube.com/watch?v=VkKMf23ZokY",
    },
    {
        infotype: "Talks and Videos",
        title: "Latency Analysis with Istio & OpenCensus",
        alt: "Latency Analysis",
        nodetype: "Istio",
        pic: Opencensus,
        icon: Play,
        time: 35,
        overview:
            "Learn how to do latency and hotspot analysis in a microservices environment with Istio and Envoy integrated with OpenCensus.",
        tags: "event;talk-videos;microservices;istio;envoy",
        url: "https://www.youtube.com/watch?v=ME-EhOKqFOY&feature=youtu.be",
    },
    {
        infotype: "Talks and Videos",
        title: "Istio - The Packet's-Eye View",
        alt: "Istio Talk",
        nodetype: "Istio",
        pic: Eyeview,
        icon: Play,
        time: 36,
        overview:
            "A practical introduction to the operation of Istio and how it can impact your environment. Kubecon Seattle 2018 talk.",
        tags: "event;talk-videos;kubecon;istio",
        url: "https://www.youtube.com/watch?v=zJnYuFsLHfY&feature=youtu.be",
    },
    {
        infotype: "Papers and Guides",
        title: "Case Study: NAV's Istio Deployment with Tetrate",
        alt: "Nav Logo",
        nodetype: "Istio",
        pic: nav,
        icon: read,
        time: 5,
        overview:
            "See how Tetrate helps the Norwegian Labour and Welfare Administration (NAV) operationalize Istio.",
        tags: "istio; install",
        url:
            "https://www.tetrate.io/blog/case-study-tetrate-resolves-the-complexities-of-navs-transition-to-istio/",
    },
    {
        infotype: "Podcasts",
        title:
            "Podcast: How Autotrader used Service Mesh for mTLS and more (with Karl Stoney)",
        alt: "Autotrader",
        nodetype: "Istio",
        pic: autotrader,
        icon: Play,
        time: 22,
        overview:
            "Autotrader UK’s Karl Stoney explains what led them to Istio, how they got more than they bargained for, and considerations that engineers should make before getting started with Istio.",
        tags: "podcast;istio",
        url: "https://tetrate.io/blog/karl-stoney-podcast/",
    },
    {
        infotype: "Podcasts",
        title:
            "Podcast: The Basics of Istio with Creators Louis Ryan and Varun Talwar",
        alt: "Varun and Louis",
        nodetype: "Istio",
        pic: varunlouis,
        icon: Play,
        time: 29,
        overview:
            "The co-creators of Istio-- Louis Ryan of Google and Tetrate’s Varun Talwar-- discuss the key areas that Istio is designed to assist, dispel some common myths surrounding Istio, and offer their advice to those wishing to start out.",
        tags: "podcast;istio",
        url: "https://tetrate.io/blog/louis-ryan-varun-talwar-podcast/",
    },
];
