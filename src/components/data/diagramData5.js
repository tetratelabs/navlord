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
import nav from "../../assets/nav.jpg";
import amazoneks from "../../assets/amazoneks.jpg";
import autotrader from "../../assets/autotrader.jpg";
import varunlouis from "../../assets/varunlouis.jpg";
import Play from "../../assets/play-button.svg";
import read from "../../assets/read.svg";

export const diagramData = [
    {
        infotype: "Papers and Guides",
        infoid: 1,
        title: "Introducing GetEnvoy",
        nodetype: "Envoy",
        pic: getenvoy,
        icon: read,
        time: 3,
        overview:
            "Tetrate provides certified, tested builds of Envoy proxy",
        tags: "envoy; intro",
        url:
            "http://tetrate.io/blog/announcing-getenvoy/",
    },
    // {
    //     infotype: "Papers and Guides",
    //     infoid: 2,
    //     title:
    //         "Case Study: NAV's Istio Deployment with Tetrate",
    //     nodetype: "Istio",
    //     pic: nav,
    //     icon: read,
    //     time: 5,
    //     overview:
    //         "See how Tetrate helps the Norwegian Labour and Welfare Administration (NAV) operationalize Istio.",
    //     tags: "istio; install",
    //     url:
    //         "https://www.tetrate.io/blog/case-study-tetrate-resolves-the-complexities-of-navs-transition-to-istio/",
    // },
    {
        infotype: "Papers and Guides",
        infoid: 3,
        title: "Istio on EKS",
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
        infotype: "Talks and Videos",
        infoid: 4,
        title: "Starting out with Service Mesh",
        nodetype: "Envoy",
        pic: Matt,
        icon: Play,
        time: 6,
        overview:
            "Envoy creator Matt Klein (Lyft) advises organizations starting with service mesh to make changes incrementally, to solve problems one piece at a time.",
        tags: "event;talk-videos;service-mesh;envoy",
        url:
            "https://www.youtube.com/watch?v=Lo-6x6NbUVI&feature=youtu.be",
    },
    {
        infotype: "Talks and Videos",
        infoid: 5,
        title: "Adopting Kubernetes? You'll need observability for that.",
        pic: Chris,
        icon: Play,
        time: 4,
        nodetype: "Tetrate",
        overview:
            "As companies adopt Kubernetes and reevaluate their architectures, Chris Aniszczyk, CTO/COO of the Cloud Native Computing Foundation predicts they'll look increasingly to mesh to provide observability.",
        tags:
            "event;talk-videos;kubernetes;cncf;service-mesh",
        url:
            "https://www.youtube.com/watch?v=9O9im_nLcQQ&feature=youtu.be",
    },
    {
        infotype: "Talks and Videos",
        infoid: 6,
        title: "Use Case: How Verizon used Service Mesh for mTLS and more",
        nodetype: "Tetrate",
        pic: Suresh,
        icon: Play,
        time: 5,
        overview:
            "Suresh describes how Verizon media has been using service mesh to secure traffic flow with MTLS without code changes, distribute tracing to troubleshoot, and more.",
        tags: "event;talk-videos;service-mesh",
        url:
            "https://www.youtube.com/watch?v=sa8R9PD7coc&feature=youtu.be",
    },
    {
        infotype: "Talks and Videos",
        infoid: 7,
        title: "Intro to Next Generation Access Control (NGAC) with David Ferraiolo of NIST",
        nodetype: "Tetrate",
        pic: David,
        icon: Play,
        time: 7,
        overview:
            "David of NIST walks through Next Generation Access Control (NGAC), a new approach to delegating and querying access privileges with fine-grained policies.",
        tags: "event;talk-videos;nist;ngac",
        url:
            "https://www.youtube.com/watch?v=DcpfxYWwAOE",
    },
    {
        infotype: "Talks and Videos",
        infoid: 8,
        title: "Service Mesh: Decoupling of Dev and Network Ops",
        nodetype: "Tetrate",
        pic: Louis,
        icon: Play,
        time: 6,
        overview:
            "Louis Ryan of Google explains how service mesh delivers flexibility and control to app developers and administrators and operators abstracting the network's control plane and enabling the enterprise.",
        tags: "event;talk-videos;service-mesh;network",
        url:
            "https://www.youtube.com/watch?v=Rr3Ftm4p6nc&feature=youtu.be",
    },
    {
        infotype: "Talks and Videos",
        infoid: 9,
        title: "Larry Peterson at Service Mesh Day",
        nodetype: "Tetrate",
        pic: Larry,
        icon: Play,
        time: 6,
        overview:
            "Larry Peterson of ONFtalks about federating service meshes and the challenges ahead for building next generation applications.",
        tags: "event;talk-videos;service-mesh",
        url:
            "https://www.youtube.com/watch?v=mazZvoxxm1w&feature=youtu.be",
    },
    {
        infotype: "Talks and Videos",
        infoid: 10,
        title: "Using Service Mesh for Resilience",
        nodetype: "Tetrate",
        pic: Eric,
        icon: Play,
        time: 4,
        overview:
            "UC Berkeley’s Eric Brewer helps avert breakdowns with canary testing and progressive rollouts.",
        tags: "event;talk-videos;canary-testing",
        url:
            "https://www.youtube.com/watch?v=yFxqnvH9MgQ",
    },
    {
        infotype: "Talks and Videos",
        infoid: 11,
        title: "An Overview of Istio Mesh",
        nodetype: "Istio",
        pic: Shri,
        icon: Play,
        time: 32,
        overview:
            "Istio: Weaving the Service Mesh. By Shriram Rajagopalan & Louis Ryan",
        tags: "event;talk-videos;service-mesh;istio",
        url:
            "https://www.youtube.com/watch?v=WFEllbmRI8U&t=1s",
    },
    {
        infotype: "Talks and Videos",
        infoid: 12,
        title: "Debugging Istio Networking",
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
        infoid: 13,
        title:
            "Connecting, Managing, Observing, and Securing Services",
        nodetype: "Tetrate",
        pic: Zack,
        icon: Play,
        time: 50,
        overview:
            "Zack Butcher talks about how a service mesh helps with the transition from monoliths to microservices to empower the organization.",
        tags:
            "event;talk-videos;miroservices;service-mesh",
        url:
            "https://www.infoq.com/presentations/service-mesh-microservices-2018/",
    },
    {
        infotype: "Talks and Videos",
        infoid: 14,
        title: "GitOps for Istio",
        nodetype: "Istio",
        pic: Varun,
        icon: Play,
        time: 38,
        overview:
            "Learn how to manage Istio config like managing code. Varun Talwar's Kubecon Europe 2018 talk.",
        tags: "event;talk-videos;istio;kubecon",
        url:
            "https://www.youtube.com/watch?v=VkKMf23ZokY",
    },
    {
        infotype: "Talks and Videos",
        infoid: 15,
        title:
            "Latency Analysis with Istio & OpenCensus",
        nodetype: "Istio",
        pic: Opencensus,
        icon: Play,
        time: 35,
        overview:
            "Learn how to do latency and hotspot analysis in a microservices environment with Istio and Envoy integrated with OpenCensus.",
        tags:
            "event;talk-videos;microservices;istio;envoy",
        url:
            "https://www.youtube.com/watch?v=ME-EhOKqFOY&feature=youtu.be",
    },
    {
        infotype: "Talks and Videos",
        infoid: 16,
        title: "Istio - The Packet's-Eye View",
        nodetype: "Istio",
        pic: Eyeview,
        icon: Play,
        time: 36,
        overview:
            "A practical introduction to the operation of Istio and how it can impact your environment. Kubecon Seattle 2018 talk.",
        tags: "event;talk-videos;kubecon;istio",
        url:
            "https://www.youtube.com/watch?v=zJnYuFsLHfY&feature=youtu.be",
    },
    {
        infotype: "Podcasts",
        infoid: 17,
        title: "Podcast: How Autotrader used Service Mesh for mTLS and more (with Karl Stoney)",
        nodetype: "Istio",
        pic: autotrader,
        icon: Play,
        time: 22,
        overview:
            "Autotrader UK’s Karl Stoney explains what led them to Istio, how they got more than they bargained for, and considerations that engineers should make before getting started with Istio.",
        tags: "podcast;istio",
        url:
            "http://tetrate.io/blog/karl-stoney-podcast/",
    },
    {
        infotype: "Podcasts",
        infoid: 18,
        title: "Podcast: The Basics of Istio with Creators Louis Ryan and Varun Talwar",
        nodetype: "Istio",
        pic: varunlouis,
        icon: Play,
        time: 29,
        overview:
            "The co-creators of Istio-- Louis Ryan of Google and Tetrate’s Varun Talwar-- discuss the key areas that Istio is designed to assist, dispel some common myths surrounding Istio, and offer their advice to those wishing to start out.",
        tags: "podcast;istio",
        url:
            "http://tetrate.io/blog/louis-ryan-varun-talwar-podcast/",
    }

];